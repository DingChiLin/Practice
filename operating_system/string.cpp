#include <stdio.h>
#include <string.h>

void string_copy() {
	char s1[100],
			 s2[100];
	strcpy( s1, "xxxxxx 1" );
	strcpy( s2, "zzzzzz 2" );

	puts( "Original strings: " );
	puts( "" );
	puts( s1 );
	puts( s2 );
	puts( "" );

	strcpy( s2, s1 );

	puts( "New strings: " );
	puts( "" );
	puts( s1 );
	puts( s2 );
}

void string_find() {
	char t[50] = "MEAS:VOLT:DC?";
	char *p;
	p = t;
	puts( p );
	while(( p = strchr( p, ':' )) != NULL )
	{
		puts( ++p );
	}

	puts( strstr( t, "VOLT" ) );
}

int main()
{
	string_copy();
	string_find();
	return 0;
}
