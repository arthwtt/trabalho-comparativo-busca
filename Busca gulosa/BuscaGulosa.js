class Adjacente {
    constructor(vertice, custo) {
        this.vertice = vertice;
        this.custo = custo;
    }
}

class Vertice {
    constructor(rotulo, distanciaObjetivo) {
        this.rotulo = rotulo;
        this.distanciaObjetivo = distanciaObjetivo;
        this.visitado = false;
        this.adjacentes = [];
    }

    adicionaAdjacente(adjacente) {
        this.adjacentes.push(adjacente);
    }

    mostrarAdjacentes() {
        console.log(`Adjacentes de ${this.rotulo}:`);
        this.adjacentes.forEach(adj => {
            console.log(` -> ${adj.vertice.rotulo} (Custo: ${adj.custo})`);
        });
    }
}

class Grafo {
    constructor() {
        this.Arad = new Vertice('Arad', 366);
        this.Bucharest = new Vertice('Bucharest', 0);
        this.Craiova = new Vertice('Craiova', 160);
        this.Dobreta = new Vertice('Dobreta', 242);
        this.Eforie = new Vertice('Eforie', 161);
        this.Fagaras = new Vertice('Fagaras', 178);
        this.Giurgiu = new Vertice('Giurgiu', 77);
        this.Hirsova = new Vertice('Hirsova', 151);
        this.Iasi = new Vertice('Iasi', 226);
        this.Lugoj = new Vertice('Lugoj', 244);
        this.Mehadia = new Vertice('Mehadia', 241);
        this.Neamt = new Vertice('Neamt', 234);
        this.Oradea = new Vertice('Oradea', 380);
        this.Pitesti = new Vertice('Pitesti', 98);
        this.RimnicuVilcea = new Vertice('Rimnicu Vilcea', 193);
        this.Sibiu = new Vertice('Sibiu', 253);
        this.Timisoara = new Vertice('Timisoara', 329);
        this.Urziceni = new Vertice('Urziceni', 80);
        this.Vaslui = new Vertice('Vaslui', 199);
        this.Zerind = new Vertice('Zerind', 374);

        this.Arad.adicionaAdjacente(new Adjacente(this.Zerind, 75));
        this.Arad.adicionaAdjacente(new Adjacente(this.Sibiu, 140));
        this.Arad.adicionaAdjacente(new Adjacente(this.Timisoara, 118));

        this.Bucharest.adicionaAdjacente(new Adjacente(this.Fagaras, 211));
        this.Bucharest.adicionaAdjacente(new Adjacente(this.Pitesti, 101));
        this.Bucharest.adicionaAdjacente(new Adjacente(this.Giurgiu, 90));
        this.Bucharest.adicionaAdjacente(new Adjacente(this.Urziceni, 85));

        this.Craiova.adicionaAdjacente(new Adjacente(this.Dobreta, 120));
        this.Craiova.adicionaAdjacente(new Adjacente(this.RimnicuVilcea, 146));
        this.Craiova.adicionaAdjacente(new Adjacente(this.Pitesti, 138));

        this.Dobreta.adicionaAdjacente(new Adjacente(this.Mehadia, 75));
        this.Dobreta.adicionaAdjacente(new Adjacente(this.Craiova, 120));

        this.Eforie.adicionaAdjacente(new Adjacente(this.Hirsova, 86));

        this.Fagaras.adicionaAdjacente(new Adjacente(this.Sibiu, 99));
        this.Fagaras.adicionaAdjacente(new Adjacente(this.Bucharest, 211));

        this.Giurgiu.adicionaAdjacente(new Adjacente(this.Bucharest, 90));

        this.Hirsova.adicionaAdjacente(new Adjacente(this.Urziceni, 98));
        this.Hirsova.adicionaAdjacente(new Adjacente(this.Eforie, 86));

        this.Iasi.adicionaAdjacente(new Adjacente(this.Neamt, 87));
        this.Iasi.adicionaAdjacente(new Adjacente(this.Vaslui, 92));

        this.Lugoj.adicionaAdjacente(new Adjacente(this.Timisoara, 111));
        this.Lugoj.adicionaAdjacente(new Adjacente(this.Mehadia, 70));

        this.Mehadia.adicionaAdjacente(new Adjacente(this.Dobreta, 75));
        this.Mehadia.adicionaAdjacente(new Adjacente(this.Lugoj, 70));

        this.Neamt.adicionaAdjacente(new Adjacente(this.Iasi, 87));

        this.Oradea.adicionaAdjacente(new Adjacente(this.Zerind, 71));
        this.Oradea.adicionaAdjacente(new Adjacente(this.Sibiu, 151));

        this.Pitesti.adicionaAdjacente(new Adjacente(this.Bucharest, 101));
        this.Pitesti.adicionaAdjacente(new Adjacente(this.RimnicuVilcea, 97));
        this.Pitesti.adicionaAdjacente(new Adjacente(this.Craiova, 138));

        this.RimnicuVilcea.adicionaAdjacente(new Adjacente(this.Craiova, 146));
        this.RimnicuVilcea.adicionaAdjacente(new Adjacente(this.Sibiu, 80));
        this.RimnicuVilcea.adicionaAdjacente(new Adjacente(this.Pitesti, 97));

        this.Sibiu.adicionaAdjacente(new Adjacente(this.Arad, 140));
        this.Sibiu.adicionaAdjacente(new Adjacente(this.Oradea, 151));
        this.Sibiu.adicionaAdjacente(new Adjacente(this.Fagaras, 99));
        this.Sibiu.adicionaAdjacente(new Adjacente(this.RimnicuVilcea, 80));

        this.Timisoara.adicionaAdjacente(new Adjacente(this.Arad, 118));
        this.Timisoara.adicionaAdjacente(new Adjacente(this.Lugoj, 111));

        this.Urziceni.adicionaAdjacente(new Adjacente(this.Bucharest, 85));
        this.Urziceni.adicionaAdjacente(new Adjacente(this.Hirsova, 98));
        this.Urziceni.adicionaAdjacente(new Adjacente(this.Vaslui, 142));

        this.Vaslui.adicionaAdjacente(new Adjacente(this.Urziceni, 142));
        this.Vaslui.adicionaAdjacente(new Adjacente(this.Iasi, 92));

        this.Zerind.adicionaAdjacente(new Adjacente(this.Arad, 75));
        this.Zerind.adicionaAdjacente(new Adjacente(this.Oradea, 71));
    }
}

class Gulosa {
    constructor(objetivo) {
        this.objetivo = objetivo;
        this.encontrado = false;
        this.distanciaTotal = 0;
        this.caminho = [];
    }

    buscar(atual, custoAteAqui = 0) {
        console.log('\n-----------------------------');
        console.log(`Cidade Atual: ${atual.rotulo}`);
        atual.visitado = true;
        this.distanciaTotal += custoAteAqui;
        this.caminho.push(atual.rotulo);

        if (custoAteAqui > 0) {
            console.log(`Custo da aresta percorrida: ${custoAteAqui} km`);
            console.log(`Distância acumulada: ${this.distanciaTotal} km`);
        }

        if (atual === this.objetivo) {
            this.encontrado = true;
            console.log(`\n Chegamos ao destino: ${atual.rotulo}!`);
            console.log(`Caminho: ${this.caminho.join(' -> ')}`);
            console.log(`Distância total percorrida: ${this.distanciaTotal} km`);
            return;
        }

        let cidadesPossiveis = atual.adjacentes.filter(adj => !adj.vertice.visitado);
        cidadesPossiveis.sort((a, b) => a.vertice.distanciaObjetivo - b.vertice.distanciaObjetivo);

        console.log('Opções de caminho (ordenadas pela heurística):');
        cidadesPossiveis.forEach(adj => {
            console.log(` -> ${adj.vertice.rotulo} (Heurística: ${adj.vertice.distanciaObjetivo}, Custo real: ${adj.custo})`);
        });

        if (cidadesPossiveis.length > 0) {
            let proximo = cidadesPossiveis[0];
            this.buscar(proximo.vertice, proximo.custo);
        } else {
            console.log('\nChegamos a um beco sem saída e não encontramos o objetivo.');
        }
    }
}

const mapa = new Grafo();
const gulosa = new Gulosa(mapa.Bucharest);
console.log("=== Iniciando a Busca Gulosa de Arad para Bucharest ===");
gulosa.buscar(mapa.Arad);