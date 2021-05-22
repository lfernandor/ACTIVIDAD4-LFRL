import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Contacto from "./app/screens/contacto";
import Fotos from "./app/screens/fotos";
import Inicio from "./app/screens/inicio";
import Menu from "./app/screens/menu";
import Redes from "./app/screens/redes";
import Somos from "./app/screens/somos";
import Viajes from "./app/screens/viajes";

export default function App() {
  return (
    <div>
      <Contacto />
      <Fotos />
      <Inicio />
      <Menu />
      <Redes />
      <Somos />
      <Viajes />
    </div>
  );
}

