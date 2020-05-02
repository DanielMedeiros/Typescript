import StartUp from './startUp';

let port = process.env.port || '3050';

StartUp.app.listen(port, ()=> {
    console.log(`>> Executando o servidor na porta ${port} <<`);
})