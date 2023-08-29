const dishes = require('../data/data');

const mainControllers = {
    showIndex: (req,res)=>{
        res.render('index')
    },
    showDetail: (req,res) => {
        const id = req.params.id;
        const dish = dishes.find(item => item.id == id);
//el find es un metodo parecido al filter pero lo que nos devuelve es un objeto y lo despega del array, cosa que el filter no lo hace
        //console.log(dish) prueba 
        res.render('detalleMenu', {plato:dish})
    },
    
}

module.exports = mainControllers;