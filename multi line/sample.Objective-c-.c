#import <stdio.h>

int main(void) {
    int n , i , sum = 0;
    scanf("%d", &n);
    for (i = 0 ; i < n ; i++){
        int x;
        scanf("%d" , &x);
        sum += x;
    }
    printf("%d" , sum);
    return 0;
}

