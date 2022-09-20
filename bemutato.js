let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", kiir1);

function kiir1(){
    document.getElementById("jobb").innerHTML=`<code><pre>import java.io.FileWriter;
    import java.io.IOException;
    //import java.util.ArrayList;
    //import java.util.List;
    import java.util.Scanner;
    </pre></code>`
}
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", kiir2);
function kiir2(){
    document.getElementById("jobb").innerHTML=`<code><pre>Scanner scanner = new Scanner(System.in);

    System.out.print("Kérem adja meg az első azonosítót: ");
    String identifier1 = scanner.next();
    System.out.print("Kerem adja meg a masodik azonositot: ");
    String identifier2 = scanner.next();
    scanner.close();

    System.out.println(identifier1.equals(identifier2)
            ? "A két azonosító megegyezik egymással" : "A két azonosító nem egyezik meg egymással");
    
    </pre></code>`
}
let btn3 = document.getElementById("btn3");
btn3.addEventListener("click", kiir3)
function kiir3(){
    document.getElementById("jobb").innerHTML=`<code><pre>
    try {
        FileWriter identifiers = new FileWriter("azonosítők.txt");
        identifiers.write("Az első azonosító: " + identifier1);
        identifiers.write("A második azonosító: " + identifier2);
        
        System.out.println("A bekért azonosítókat a kijelölt .txt fájlban megtalálja");
    } catch (IOException e) {
        System.out.println("Hiba történt, próbálja újra");
    }
    identifiers.close();
}
}
    
    </pre></code>`
    
}

    
    


    
 