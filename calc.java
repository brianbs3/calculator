public class calc {
  public static void main(String[] args) {
    System.out.println("Hello World");
    int[] numbers = {1,2,3,4,5,6};
    System.out.println(numbers);
    System.out.println("sum:" + sum(numbers));
  }

  public static int sum(int[] nums){
    int s = 0;
    for(int i : nums)
      s+=i;
    return s;
  }
}
