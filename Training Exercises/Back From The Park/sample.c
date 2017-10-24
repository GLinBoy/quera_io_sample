#include <stdio.h>
#include <stdlib.h>

int main() {
	int x, y, x1, y1 ;
	scanf("%d %d %d %d", &x, &y, &x1, &y1);
	if ( x < x1 )
		printf("Right");
	else
		printf("Left");
	return 0;
}
