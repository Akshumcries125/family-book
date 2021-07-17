
       var Names=["Family Book","Dad","Me","Mom"]
       function update()
       {
           i++;
           var number_of_member_in_family=3;
           if(i>number_of_member_in_family)
           {
              i=0;
           }
           var updated_image=images[i];
           var updated_name=names[i];
           document.getElementById("family_member_image").src=updated_image;
           document.getElementById("family_member_name").innerHTML=updated_name;
        }   var i=0
        