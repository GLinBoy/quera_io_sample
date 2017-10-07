//be name khoda
import java.util.Scanner;
public class Main {
    static Scanner sc = new Scanner(System.in);
    public static void main(String[] args) {
        int ans=0;
        int n = sc.nextInt();
        for(int i=0;i<n;i++) {
            int a = sc.nextInt();
            ans = ans + a;
        }
        System.out.println(ans);
    }
}
