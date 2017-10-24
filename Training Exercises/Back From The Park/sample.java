import java.util.Scanner;

public class Main {
	static Scanner sc = new Scanner(System.in);

	public static void main(String[] args) {
		int x = sc.nextInt();
		sc.nextInt();
		int xx = sc.nextInt();
		sc.nextInt();
		if (xx > x)
			System.out.println("Right");
		else
			System.out.println("Left");
	}

}
