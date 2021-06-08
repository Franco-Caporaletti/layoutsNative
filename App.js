import React from 'react';

import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';


const App = () => {
  return (
    <>
    
      <View style={{ flexDirection: 'row' }}>
        <Image 
          style={styles.banner}
          source={ require('./assets/img/imagen1.jpg')}
        />
      </View>

      <ScrollView style={styles.contenedor}>
        <Text style={styles.titulo}>Cual sera tu próxima moto?</Text>

        {/* scroll de izquierda a derecha */}
        {/* La propiedad horizontal en scroll para scrollear al estilo carousel */}
        <ScrollView 
          horizontal
        >
          <View>
            <Image 
            style={styles.moto}
            source={ require('./assets/img/moto1.jpg')}
            />
          </View>

          <View>
            <Image 
            style={styles.moto}
            source={ require('./assets/img/moto2.jpg')}
            />
          </View>

          <View>
            <Image 
            style={styles.moto}
            source={ require('./assets/img/moto3.jpg')}
            />
          </View>

          <View>
            <Image 
            style={styles.moto}
            source={ require('./assets/img/moto4.jpg')}
            />
          </View>

          <View>
            <Image 
            style={styles.moto}
            source={ require('./assets/img/moto5.jpg')}
            />
          </View>
        </ScrollView>

        <Text style={styles.titulo}>Mejores marcas</Text>

        <View>
          <View>
              <Image 
              style={styles.mejores}
              source={ require('./assets/img/mejores1.jpg')}
              />
            </View>

            <View>
              <Image 
              style={styles.mejores}
              source={ require('./assets/img/mejores2.jpg')}
              />
            </View>

            <View>
              <Image 
              style={styles.mejores}
              source={ require('./assets/img/mejores3.jpg')}
              />
            </View>
        </View>

        <Text style={styles.titulo}>Live to ride, ride to live</Text>

        <View style={styles.listado}>
            <View style={styles.listadoItem}>
              <Image 
              style={styles.mejores}
              source={ require('./assets/img/live1.jpg')}
              />
            </View>

            <View style={styles.listadoItem}>
              <Image 
              style={styles.mejores}
              source={ require('./assets/img/live2.jpg')}
              />
            </View>

            <View style={styles.listadoItem}>
              <Image 
              style={styles.mejores}
              source={ require('./assets/img/live3.jpg')}
              />
            </View>

            <View style={styles.listadoItem}>
              <Image 
              style={styles.mejores}
              source={ require('./assets/img/live4.jpg')}
              />
            </View>
        </View>
          
        </ScrollView>
      
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20
  },
  contenedor: {
    marginHorizontal: 10
  },
  moto:{
    width: 350,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  listadoItem:{
    flexBasis: '49%'
  }
});

export default App;
