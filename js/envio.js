const firebaseConfig = {
    apiKey: "AIzaSyCkvIQSpyrRf3aFm2VxkQf2slvWg6ZP_vc",
    authDomain: "assinatura-digital-g-vale.firebaseapp.com",
    projectId: "assinatura-digital-g-vale",
    storageBucket: "assinatura-digital-g-vale.appspot.com",
    messagingSenderId: "926707083676",
    appId: "1:926707083676:web:d26bd2e0c9e8d60059c059"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

const input = document.querySelector("input[type=file]");

input.addEventListener("change",(e)=>{
    let file = e.target.files[0];

    const uploadFile = storage.ref(`contratos/${e.target.files[0].name}`)
    .put(e.target.files[0]);

    uploadFile.on("state_changed",function(snapshot){

        let progress = (snapshot.bytesTransferred/snapshot.totalBytes) + 1;

        document.querySelector("progress").value = progress;

    },function (error){},function(){
        console.log("Documento enviado com sucesso!");
    })
});

// SEGUNDA TENTATIVA 

//function to save file
function uploadFile(){
      
    // Created a Storage Reference with root dir
    var storageRef = firebase.storage().ref();
    // Get the file from DOM
    var file = document.getElementById("files").files[0];
    console.log(file);
    
    //dynamically set reference to the file name
    var thisRef = storageRef.child(file.name);

    //put request upload file to firebase storage
    thisRef.put(file).then(function(snapshot) {
       alert("File Uploaded")
       console.log('Uploaded a blob or file!');
    });
  }


  // TERCEITA TENTATIVA 

var fileInput = document.getElementById("file-input");

var ref = firebase.storage().ref("arquivos");

fileInput.onchange = function (event) {
    var arquivo = event.target.files[0];

    ref.child("arquivos").put(arquivo).then(snapshot => {
        console.log("snapshot", snapshot);
        ref.child("arquivo").getDownloadURL().then(url => {
            console.log("string para dowload", url);
        });
    });
}