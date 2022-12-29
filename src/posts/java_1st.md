## Object 클래스
---
- __모든 클래스의 최상위 클래스__
- 아무것도 상속받지 않으면 자동으로 오브젝트를 상속받음
- 오브젝트가 가지고 있는 메소드는 모든 클래스에서 다 사용 가능함  

> #### 자주 쓰는 메소드
> - `equals` : 객체가 가지고 있는 값을 비교할 때 사용
> - `toString` : 객체가 가지고 있는 값을 문자열로 반환
> - `hashCode` : 객체의 해시코드 값 반환  
> ⚠️ 반드시 __오버라이딩__해서 사용해야 한다.


```java
public class Student {
    String name;
    String number;
    int birthYear;

    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "홍길동";
        s1.number = "1234";
        s1.birthYear = 1995;

        Student s2 = new Student();
        s2.name = "홍길동";
        s2.number = "1234";
        s2.birthYear = 1995;

        if (s1.equals(s2))
            System.out.println("s1 == s2");
        else
            System.out.println("s1 != s2");
    }
}
```
	>> s1 != s2

- "s1 == s2"가 아닌 이유는 __equals 메소드는 오브젝트가 구현하고 있는 메소드를 그냥 사용하고 있기 때문__
-> 오버라이딩을 해야함

<br/>
<br/>

## 오버라이딩(Overriding)
---
- 쉽게 말해 __"재정의"__
- 부모클래스에서 정의된 메소드나 변수를 자식클래스에서 상속받아 사용할 수 있는데, 여기서 부모클래스에서 상속받은 메소드를 자식클래스에서 재정의하여 사용하는 것을 오버라이딩이라 한다.


