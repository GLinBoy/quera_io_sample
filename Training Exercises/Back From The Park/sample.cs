using System;

class B{
	public static void Main(){
		string[] s = Console.ReadLine().Split();
		int x = int.Parse(s[0]);
		int y = int.Parse(s[1]);
		
		string[] t = Console.ReadLine().Split();
		int x1 = int.Parse(t[0]);
		int y1 = int.Parse(t[1]);

		if (x < x1){
			Console.WriteLine("Right");
		}
		else{
			Console.WriteLine("Left");
		}
	}
}

