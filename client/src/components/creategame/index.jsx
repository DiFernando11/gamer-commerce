import React, { useState } from "react";
/* import { useDispatch } from "react-redux"; */
import "./index.scss";


const CreateGame = () => {
    /* const dispatch = useDispatch(); */
    const [error, setError] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [input, setInput] = useState({
        name: "",
        description: "",
        released: 0,
        image: [],
        price: 0,
        rating: 0,
        website: "",
        developers: "",
        requirements_min: "",
        requirements_max: "",
    });



    const handleChange = (e) => {
        e.preventDefault();
        setInput({
           ...input,
           [e.target.name]: e.target.value
           
        })
        setError(
            InputValidator({
              ...input,
              [e.target.name]: e.target.value,
            })
          );
     };

     function InputValidator(input) {
        let err = {};
        if (!input.name || typeof input.name !== "string"  || input.name === "" || input.name.length < 4 || input.name.length > 12 || input.name !== input.name.trim()) {
            err.name = "Please type a name validate!";
        } else if (input.name[0] === input.name[0].toLowerCase()) {
            err.name = "The first letter must be uppercase";
        } else if (input.description === "" || input.description.length < 4 || input.description.length > 12 || input.description !== input.description.trim()) {
            err.description = "The description must be validate!";
        } else if (input.released < 1980 || input.date > 2022){
            err.released = "The date must be between 1980 and 2021";
        } else if (input.price <= 0 || input.price > 1000){
            err.price = "The price must be between 0 and 1000";
        } else if (input.rating <= 0 || input.rating > 5){
            err.rating = "The rating must be between 0 and 5";
        } else if (!input.website || typeof input.website !== "string" ) {
            err.website = "Please type a website!";
        } else if (input.website.length > 100){
            err.website = "The website must be less than 100 characters";
        } else if (!input.developers || typeof input.developers !== "string" || /([0-9])/.test(input.developers) || input.developers === "" || input.developers.length < 4 || input.developers.length > 12 || input.developers !== input.developers.trim()) {
            err.developers = "Please type a developers validate!";
        } else if (input.developers[0] === input.developers[0].toLowerCase()) {
            err.developers = "The first letter must be uppercase";
        } else if (!input.requirements_min || typeof input.requirements_min !== "string" || input.requirements_min === "" || input.requirements_min.length < 4 ) {
            err.requirements_min = "Please type a systemrequirementsmin validate!";
        } else if (!input.requirements_max || typeof input.requirements_max !== "string" || input.requirements_max === "" || input.requirements_max.length < 4) {
            err.requirements_max = "Please type a systemrequirementsmax validate!";
        }
        setDisabled(false);
        return err;
      }
    
     const handleSubmit = (e) => {
        e.preventDefault();
        
        
        /* dispatch(createUser(input)); */
        setDisabled(true);
        alert("Game created successfully");
        setInput({
            name: "",
            description: "",
            released: 0,
            image: [],
            price: 0,
            rating: 0,
            website: "",
            developers: "",
            requirements_min: "",
            requirements_max: "",
        });
    };

    return (
        <div className="font-cgame">
            <div className="container2">
                <form className="form-cgame" onSubmit={(e)=>handleSubmit(e)}>
                    <h1>Create Game</h1>
                    <p>Name:</p>
                    <input className="inputs2" type="text" name="name" onChange={(e)=> handleChange(e)} value={input.name}/>
                        {error.name && <p className="error">{error.name}</p>}
                    <p>Description:</p>
                    <input className="inputs2" type="textarea" name="description" onChange={(e)=> handleChange(e)} value={input.description}/>
                        {error.description && <p className="error">{error.description}</p>}
                    <p>Released:</p>
                    <input className="inputs2" type="date" name="released" onChange={(e)=> handleChange(e)} value={input.released}/>
                        {error.released && <p className="error">{error.released}</p>}
                    <p>Price: </p>
                    <input className="inputs2" type="number" name="price" onChange={(e)=> handleChange(e)} value={input.price}/>
                        {error.price && <p className="error">{error.price}</p>}
                    <p>Ranting: </p>
                    <input className="inputs2" type="number" name="rating" onChange={(e)=> handleChange(e)} value={input.rating}/>
                        {error.rating && <p className="error">{error.rating}</p>}
                    <p>Website: </p>
                    <input className="inputs2" type="text" name="website" onChange={(e)=> handleChange(e)} value={input.website}/>
                        {error.website && <p className="error">{error.website}</p>}
                    <p>Developers: </p>
                    <input className="inputs2" type="text" name="developers" onChange={(e)=> handleChange(e)} value={input.developers}/>
                        {error.developers && <p className="error">{error.developers}</p>}
                    <p>System Requirements Min: </p>
                    <input className="inputs2" type="textarea" name="requirements_min" onChange={(e)=> handleChange(e)} value={input.requirements_min}/> 
                        {error.requirements_min && <p className="error">{error.requirements_min}</p>}
                    <p>System Requirements Max: </p>
                    <input className="inputs2" type="textarea" name="requirements_max" onChange={(e)=> handleChange(e)} value={input.requirements_max}/>
                        {error.requirements_max && <p className="error">{error.requirements_max}</p>}
                    <p>Image:</p>
                    <input multiple className="inputs2" type="file" name="image" onChange={(e)=> handleChange(e)} value={input.image}/>
                    <p>
                        <button className="btnform" type="submit" disabled={disabled === false && Object.entries(error).length === 0 ? false: true}>Create Game</button>
                    </p>
                </form>
            </div>
      </div>
    ); 
  };

  export default CreateGame;