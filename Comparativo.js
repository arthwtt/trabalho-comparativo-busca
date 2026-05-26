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
        this.g = Infinity;
        this.f = Infinity;
        this.pai = null;
    }
    adicionaAdjacente(adjacente) {
        this.adjacentes.push(adjacente);
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

// ==========================================
// 1. BUSCA GULOSA
// ==========================================
class Gulosa {
    constructor(objetivo) {
        this.objetivo = objetivo;
        this.distanciaTotal = 0;
        this.caminho = [];
    }
    buscar(atual, custoAteAqui = 0) {
        atual.visitado = true;
        this.distanciaTotal += custoAteAqui;
        this.caminho.push(atual.rotulo);

        if (atual === this.objetivo) {
            return { nome: "Gulosa", caminho: this.caminho, distancia: this.distanciaTotal, qtdCidades: this.caminho.length };
        }

        let cidadesPossiveis = atual.adjacentes.filter(adj => !adj.vertice.visitado);
        cidadesPossiveis.sort((a, b) => a.vertice.distanciaObjetivo - b.vertice.distanciaObjetivo);

        if (cidadesPossiveis.length > 0) {
            return this.buscar(cidadesPossiveis[0].vertice, cidadesPossiveis[0].custo);
        }
        return { nome: "Gulosa", caminho: this.caminho, distancia: this.distanciaTotal, qtdCidades: this.caminho.length };
    }
}

// ==========================================
// 2. BUSCA A*
// ==========================================
class AEstrela {
    constructor(objetivo) { this.objetivo = objetivo; }
    reconstruirCaminho(nodo) {
        const caminho = [];
        while (nodo) { caminho.unshift(nodo.rotulo); nodo = nodo.pai; }
        return caminho;
    }
    buscar(inicio) {
        inicio.g = 0;
        inicio.f = inicio.distanciaObjetivo;
        const openSet = [inicio];
        const closedSet = new Set();

        while (openSet.length > 0) {
            openSet.sort((a, b) => (a.f - b.f) !== 0 ? (a.f - b.f) : (a.distanciaObjetivo - b.distanciaObjetivo));
            const atual = openSet.shift();

            if (atual === this.objetivo) {
                const caminhoFinal = this.reconstruirCaminho(atual);
                return { nome: "A* (A-Estrela)", caminho: caminhoFinal, distancia: atual.g, qtdCidades: caminhoFinal.length };
            }

            closedSet.add(atual);
            atual.visitado = true;

            atual.adjacentes.forEach(adj => {
                const vizinho = adj.vertice;
                const custoAteVizinho = atual.g + adj.custo;
                if (closedSet.has(vizinho)) return;
                if (custoAteVizinho < vizinho.g) {
                    vizinho.pai = atual;
                    vizinho.g = custoAteVizinho;
                    vizinho.f = custoAteVizinho + vizinho.distanciaObjetivo;
                    if (!openSet.includes(vizinho)) openSet.push(vizinho);
                }
            });
        }
        return null;
    }
}

// ==========================================
// 3. BUSCA EM LARGURA
// ==========================================
class Largura {
    constructor(objetivo) { this.objetivo = objetivo; }
    reconstruirCaminho(nodo) {
        const caminho = [];
        while (nodo) { caminho.unshift(nodo.rotulo); nodo = nodo.pai; }
        return caminho;
    }
    buscar(inicio) {
        inicio.g = 0;
        inicio.visitado = true;
        const fila = [inicio];

        while (fila.length > 0) {
            const atual = fila.shift();
            
            if (atual === this.objetivo) {
                const caminhoFinal = this.reconstruirCaminho(atual);
                return { nome: "Largura", caminho: caminhoFinal, distancia: atual.g, qtdCidades: caminhoFinal.length };
            }

            atual.adjacentes.forEach(adj => {
                const vizinho = adj.vertice;
                if (!vizinho.visitado) {
                    vizinho.visitado = true;
                    vizinho.pai = atual;
                    vizinho.g = atual.g + adj.custo;
                    fila.push(vizinho);
                }
            });
        }
        return null;
    }
}

// ==========================================
// MOTOR DE ANÁLISE DINÂMICA E EXECUÇÃO
// ==========================================
console.log("\n=========================================================================");
console.log("INICIANDO COMPETIÇÃO DOS ALGORITMOS: ARAD -> BUCHAREST");
console.log("=========================================================================\n");

const mapaGulosa = new Grafo();
const mapaAEstrela = new Grafo();
const mapaLargura = new Grafo();

const resultados = [
    new Gulosa(mapaGulosa.Bucharest).buscar(mapaGulosa.Arad),
    new AEstrela(mapaAEstrela.Bucharest).buscar(mapaAEstrela.Arad),
    new Largura(mapaLargura.Bucharest).buscar(mapaLargura.Arad)
];

// Montando tabela base
const dadosParaTabela = resultados.map(r => ({
    "Algoritmo": r.nome,
    "Cidades Percorridas (Nós)": r.qtdCidades,
    "Distância Total": `${r.distancia} km`,
    "Rota": r.caminho.join(" ➔ ")
}));

console.table(dadosParaTabela);

// ==========================================
// AVALIAÇÃO COMPUTACIONAL DOS RESULTADOS
// ==========================================
console.log("\nANÁLISE DINÂMICA GERADA PELO SISTEMA:");

// 1. Descobrindo dinamicamente a melhor rota em quilometragem
const menorDistancia = Math.min(...resultados.map(r => r.distancia));
const vencedoresDistancia = resultados.filter(r => r.distancia === menorDistancia);

console.log(`\nVencedor em Distância Real (${menorDistancia} km):`);
vencedoresDistancia.forEach(v => {
    console.log(`   -> A busca ${v.nome} encontrou o caminho mais curto fisicamente.`);
});

// 2. Descobrindo dinamicamente a melhor rota em saltos (quantidade de cidades)
const menorQtdCidades = Math.min(...resultados.map(r => r.qtdCidades));
const vencedoresCidades = resultados.filter(r => r.qtdCidades === menorQtdCidades);

console.log(`\nVencedor em Menor Quantidade de Cidades (${menorQtdCidades} nós):`);
vencedoresCidades.forEach(v => {
    console.log(`   -> A busca ${v.nome} encontrou o trajeto fazendo menos conexões.`);
});

// 3. Identificando falhas ou miopia (Caminhos mais longos)
const maiorDistancia = Math.max(...resultados.map(r => r.distancia));
if (maiorDistancia > menorDistancia) {
    const piores = resultados.filter(r => r.distancia === maiorDistancia);
    console.log(`\nDiagnóstico de Eficiência:`);
    piores.forEach(p => {
        console.log(`   -> A busca ${p.nome} percorreu ${p.distancia} km (${p.distancia - menorDistancia} km a mais que o ideal). Isso comprova sua limitação no critério de decisão.`);
    });
}
console.log("\n=========================================================================\n");