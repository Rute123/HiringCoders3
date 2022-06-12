/*setTimeout(() => console.log("timeout"));

Promise.resolve().then(() => console.log("promise"));

console.log("code");

let window = window;

window.onload = (event) => {

    document.querySelector('.outerDiv')
    
    .addEventListener('click', displayOuterMessage, true);
}


let foo = function foo2 () {

    console.log(foo === foo2)
    
    }
    
    foo()

    

    function hello(person){

        return "Ola, " + person;
        
        }
        
        let user = "Gama"; const msg = hello(user); console.log(msg)
        */

        var p = 5; 
        
        function func() {

            var p = 9;
            
            function decl() { console.log(p);
            
            }
            
            var expr = function() { console.log(p);
            
            };
            
            var cons = function() { console.log(p);
            };

            decl();
            
            expr();
            
            cons();

            }
            
            func();