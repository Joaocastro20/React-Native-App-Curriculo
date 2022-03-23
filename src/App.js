import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView
} from "react-native";

import foto from "./assets/foto.png";
import scrum from "./assets/scrum.jpg";
import react from "./assets/react.jpg";
import devops from "./assets/devops.png";

const App = () => {
  return (
    <>
      <View style={style.page}>
        <View style={style.cabecalho}>
          <View style={style.foto}>
            <img src={foto} />
          </View>
          <View style={style.nome}>João Castro</View>
          <View style={style.prof}>Analista Desenvolvedor</View>
        </View>
        <View style={style.icones}>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://github.com/Joaocastro20")}
          >
            GitHub
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/joao-castro-719a051b4/"
              )
            }
          >
            Linkedin
          </TouchableOpacity>
        </View>
        <ScrollView style={style.scrol}>
          <View style={style.card}>
            <Text>Experiencia Profissional</Text>
            <View style={style.content}></View>
            <p>
              Atualmente trabalhando no contrato com o Ministério da Educação.
              <br></br> - Levantamento, analise, elaboração e revisão dos
              artefatos de Requisitos (História de usuário. Analise de
              Funcionalidade. etc);<br></br> - Elaboração de Proposta Técnica;
              <br></br> - Criação de protótipos estáticos para apresentação aos
              clientes;<br></br> - Melhoria de Documentos já elaborados;
              <br></br> - Realização de testes de funcionalidade em sistemas
              para entrega ao cliente;<br></br> - Versionamento/rastreabilidade
              de requisitos utilizando GIT e SVN;<br></br> - Utilização dos
              Sistemas Jira e Tuleap para documentação de projeto/sistema;{" "}
              <br></br>- Criação de Manuais para usuários e Documentos de Regras
              de Negócio.
            </p>
          </View>
          <View style={style.card}>
            <Text>Certificados</Text>
            <View style={style.cardcert}>
              <View>
                <img src={scrum} />
              </View>
              <View>
                <img src={react} />
              </View>
              <View>
                <img src={devops} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  scrol: {
    marginHorizontal: 20
  },
  page: {
    backgroundColor: "#151515",
    flex: 1,
    height: "80%"
  },
  cabecalho: {
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  },
  icones: {
    alignItems: "center",
    color: "white",
    bottom: 0,
    top: 0
  },
  foto: {
    width: 100,
    height: 100,
    justifyContent: "center",
    backgroundColor: "black",
    flex: 1
  },
  nome: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10
  },
  prof: {
    fontSize: 14,
    fontFamily: "cursive",
    fontWeight: "light"
  },
  card: {
    marginTop: 20,
    width: "100%",
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: "white",
    alignItems: "center",
    padding: 5
  },
  cardcert: {
    width: "60%",
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: "white",
    padding: 10,
    height: 2100
  }
});

export default App;
