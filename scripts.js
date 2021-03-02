let state = true;
document.querySelector('#example-1 button').addEventListener('click', function() {
    state = !state;
    document.querySelector('#example-1 h1').innerText = state ? "On" : "Off";
});

// function Switch(props) {
 
      
//     let lights = "off";
//     if (props.on) {
        
//     }
//     return <h1>on</h1>;
// }

// export default Switch;
