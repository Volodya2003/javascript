c=0;
function f1()
{
 t=document.getElementById('e1');

 if (c==0)
 { s='20pt'; t.value='12pt';c=1;}
 else
 {  s='12pt';t.value = "20pt" ; c=0; }
  elems = document.getElementsByClassName('r');
    for (i in elems)
    {elems[i].style.fontSize=s;}
}
x=0;
function f2()
{
 t=document.getElementById('e2');
 stg=prompt("Input text:");
 if (x==0)
 { s=stg;x=1;}
 elems = document.getElementsByTagName('h2');
  for (i in elems)
    {elems[i].innerHTML=stg;}

}



