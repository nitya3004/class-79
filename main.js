name_of_student_array=[];
function submit(){
    var name1=document.getElementById("student_1").value ;
    var name2=document.getElementById("student_2").value ;
    var name3=document.getElementById("student_3").value ;
    var name4=document.getElementById("student_4").value ;
    var name5=document.getElementById("student_5").value ;

    name_of_student_array.push(name1);
    name_of_student_array.push(name2);
    name_of_student_array.push(name3);
    name_of_student_array.push(name4);
    name_of_student_array.push(name5);

    console.log(name_of_student_array);
    document.getElementById("display_name").innerHTML=name_of_student_array;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";

}
function sort(){
    name_of_student_array.sort();
    console.log(name_of_student_array);
    document.getElementById("display_name").innerHTML=name_of_student_array;
}