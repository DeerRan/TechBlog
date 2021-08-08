const userpostid = document.getElementById("hide").innerHTML

const deleteClickHandler = async function() {
    await fetch(`/api/post/${userpostid}`, {
        method: 'DELETE'
    });
  
    document.location.replace('/dashboard');
};

document.querySelector('#deletebtn').addEventListener('click', deleteClickHandler);