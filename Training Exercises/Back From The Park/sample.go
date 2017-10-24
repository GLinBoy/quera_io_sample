package main

import "fmt"

func main() {
	var x , y , x1 , y1 int
	fmt.Scan(&x , &y)
	fmt.Scan(&x1 , &y1)
	if x1 < x {
		fmt.Println("Left")
	} else{
		fmt.Println("Right")
	}
}
