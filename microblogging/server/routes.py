from server import app

from flask import Flask, render_template, flash, redirect, url_for, request
from server.forms import LoginForm

from flask_login import current_user, login_user, logout_user, login_required
from server.models import User
from werkzeug.urls import url_parse
from server import db
from server.forms import RegistrationForm

@app.route('/dashboard')
def dashboard():
    sql_cmd = """
        select *
        from tracking_realtime 
    """

    query_data = db.engine.execute(sql_cmd)
    for event in query_data.fetchall():
        print(event)

    return render_template('dashboard.html', ttt="TTTT")

@app.route('/api/1.0/user/behavior/<date>')
def user_behavior(date):
    print(date)
    select_analysis_sql = """
        SELECT *
        FROM tracking_analysis
        WHERE date = %s
    """

    query_data = db.engine.execute(select_analysis_sql, date + ' 00:00:00')
    data = query_data.fetchone()
    print(data)

    result = {
        "behavior_count": [data['view_count'], data['view_item_count'], data['add_to_cart_count'], data['checkout_count']],
        "user_count": [data['unique_user_count'], data['new_user_count'], data['return_user_count']]
    }
    return result

@app.route('/')
@app.route('/index')
@login_required
def index():
    # native_sql_query()
    return render_template('index.html', title='Home', posts=current_user.posts)

@app.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        flash('Congratulations, you are now a registered user!')
        return redirect(url_for('login'))
    return render_template('register.html', title='Register', form=form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.username.data).first()
        if user is None or not user.check_password(form.password.data):
            flash('Invalid username or password')
            return redirect(url_for('login'))
        login_user(user, remember=form.remember_me.data)
        next_page = request.args.get('next')
        if not next_page or url_parse(next_page).netloc != '':
            next_page = url_for('index')
        return redirect(next_page)
    return render_template('login.html', title='Sign In', form=form)

@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('index'))

# from server import db
# db.init_app(app)
# def native_sql_query():
#     sql_cmd = """
#         select *
#         from product
#     """

#     query_data = db.engine.execute(sql_cmd)
#     for product in query_data.fetchall():
#         print(product.id)
#         print(product.title)