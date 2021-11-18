// #include<algorithm>
// #include<assert.h>
// #include<bitset>
// #include<cmath>
// #include<cstdio>
// #include<cstdlib>
// #include<cstring>
// #include<iomanip>
// #include<iostream>
// #include<limits.h>
// #include<map>
// #include<numeric>
// #include<queue>
// #include<set>
// #include<string>
// #include<vector>
// #include<unordered_map>
// #include<unordered_set>

// #pragma GCC optimize("Ofast")
// #pragma GCC target("fma,sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,tune=native")
// #pragma GCC optimize("unroll-loops")

// static int __no_use = []() { ios::sync_with_stdio(false); cin.tie(0); cout.tie(0); return 0; } ();

#include <bits/stdc++.h>
#include <ext/pb_ds/assoc_container.hpp> 
using namespace __gnu_pbds;
using namespace std;

// INT_MAX, INT_MIN, LLONG_MAX, LLONG_MIN
#define IINF (1e9+10)
#define LLINF (1e18+10)
#define FF first
#define SS second
#define MP make_pair
#define SZ(X) ((int)(X).size())
#define SSZ(S) ((int)strlen(S))
#define PRINT(A) {for (auto it = A.begin(); it != A.end(); ++it) {cout << *it << ' ';} cout << endl;}
#define PRINTP(A) {for (auto it = A.begin(); it != A.end(); ++it) {cout << "(" << it->first << ", " << it->second << ")" << " ";} cout << endl;}
#define APRINT(A, N) {for(int I = 0; I < N; I++) { cout << A[I] << " ";} cout << endl;}
#define APRINTP(A, N) {for(int I = 0; I < N; I++) {cout << "(" << A[I].first << ", " << A[I].second << ")" << " ";} cout << endl;}
#define CEIL(X, Y) (1 + ((X - 1) / Y))
#define MPRINT(A, N, M) {for(int I = 0; I < N; I++) { for(int J = 0; J < M; J++) {cout << A[I][J] << " ";} cout << endl;}}
#define MPRINTP(A, N, M) {for(int I = 0; I < N; I++) { for(int J = 0; J < M; J++) {cout << "(" << A[I][J].first << ", " << A[I][J].second << ")" << " ";} cout << endl;}}
#define SORT_UNIQUE(A) (sort(A.begin(), A.end()), A.resize(distance(A.begin(),unique(A.begin(),A.end()))))
#define SORT_UNIQUE2(A, N) {sort(A, A + N); N = unique(A, A + N) - A;}
#define GET_POS(A, x) (int)(lower_bound(A.begin(), A.end(), x) - A.begin())
#define GET_POS2(A, x, N) (int)(lower_bound(A, A + N, x) - A)
#define SUM(A) accumulate(A.begin(), A.end(), 0LL)
#define SUM2(A, N) accumulate(A, A + N, 0LL)
#define MAX(A) *max_element(A.begin(), A.end())
#define MAX2(A, N) *max_element(A, A+N);
#define SWAP(X, Y) {LL TMP = X; X = Y; Y = TMP;}
#define BIT_LENGTH(N) floor(log2(N)) + 1
#define REP(I, N) for (int I = 0; I < (N); ++I)
#define RREP(I, N) for (int I = N-1; I >= 0 ; --I)
#define REPP(I, A, B) for (int I = (A); I < (B); ++I)
#define RREPP(I, A, B) for (int I = A; I > (B); --I)
#define RI(X) scanf("%d", &(X))
#define RII(X, Y) scanf("%d%d", &(X), &(Y))
#define RIII(X, Y, Z) scanf("%d%d%d", &(X), &(Y), &(Z))
#define RL(X) scanf("%lld", &(X))
#define RLL(X, Y) scanf("%lld%lld", &(X), &(Y))
#define RLLL(X, Y, Z) scanf("%lld%lld%lld", &(X), &(Y), &(Z))
#define DRI(X) int X; scanf("%d", &X)
#define DRII(X, Y) int X, Y; scanf("%d%d", &X, &Y)
#define DRIII(X, Y, Z) int X, Y, Z; scanf("%d%d%d", &X, &Y, &Z)
#define DRL(X) long long (X); scanf("%d", &X)
#define DRLL(X, Y) long long X, Y; scanf("%d%d", &X, &Y)
#define DRLLL(X, Y, Z) long long X, Y, Z; scanf("%d%d%d", &X, &Y, &Z)
#define RS(X) scanf("%s", (X))
#define MS0I(X, N) memset((X), 0, sizeof(int)*(N));
#define MS0LL(X, N) memset((X), 0, sizeof(long long)*(N));
#define MS0B(X, N) memset((X), 0, sizeof(bool)*(N));
#define MS0C(X, N) memset((X), 0, sizeof(char)*(N));
#define MS0(X) memset((X), 0, sizeof((X)))
#define MS1(X) memset((X), -1, sizeof((X)))
#define COUNT1(X) __builtin_popcount(X)
#define MIN3(X, Y, Z) (X < Y ? (X < Z ? X : Z) : (Y < Z ? Y : Z))
#define POSMOD(A, MM) (A < 0 ? (A + MM) % MM : A % MM)
#define IN(A, S) ((S.find(A) != S.end()))
typedef long long LL;
typedef unsigned long long ULL;
typedef long double LD;
typedef pair<int,int> PII;
typedef vector<LL> VL;
typedef vector<PII> VPII;
typedef pair<LL,LL> PLL;
typedef vector<PLL> VPLL;
typedef vector<int> VI;
typedef map<int, int> MII;
typedef set<int> SI;
typedef vector<string> VS;
typedef vector<vector<int> > VVI;
typedef priority_queue<int> PQ_MAX;
typedef priority_queue<int, vector<int>, greater<int> > PQ_MIN;

void _R(int &x) { scanf("%d", &x); }
void _R(LL &x) { scanf("%lld", &x); }
void _R(double &x) { scanf("%lf", &x); }
void _R(char &x) { scanf(" %c", &x); }
void _R(char *x) { scanf("%s", x); }
void _W(const int &x) { printf("%d", x); }
void _W(const LL &x) { printf("%lld", x); }
void _W(const double &x) { printf("%.16f", x); }
void _W(const char &x) { putchar(x); }
void _W(const char *x) { printf("%s", x); }

int dx[8] = {1, 0, -1, 0};
int dy[8] = {0, 1, 0, -1};

const int V_SIZE = 1e5+5;
const int E_SIZE = 2e5+5;
const int MAX_SIZE = 2e5+5;
const int MOD = 1e9+7;

int A[10];
int main() {
		int N;
		cin >> N;
		
		for (int i = 0; i < N; i++) {
			cin >> A[i];
		}

	  for(int I = 0; I < N; I++) { 
			cout << A[I] << " ";
    } 
    cout << endl;

    return 0;
} 
