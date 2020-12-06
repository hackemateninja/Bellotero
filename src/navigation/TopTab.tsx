import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {
	About,
	Configurator,
	Testimonial,
	Stories
} from "../screens";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
	return (
		<Drawer.Navigator>
			<Drawer.Screen name="Home" component={Testimonial}/>
			<Drawer.Screen name="About" component={About}/>
			<Drawer.Screen name="Configurator" component={Configurator}/>
			<Drawer.Screen name="Stories" component={Stories}/>
		</Drawer.Navigator>
	)
}
