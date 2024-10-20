import React from "react";
import TrafficLight from '../TrafficLight';



const Home = () => {
    return (
        <div className= "text-center m-5">
           
            <TrafficLight />
			<p className="m-5">
				Made by{" "}
				<a href="https://github.com/soycamaral">SoyCamaral</a>, with
				love!
			</p>
			</div>
	);
};

export default Home;
