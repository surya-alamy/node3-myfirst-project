const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
//define path for express config
const publicDirctoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')

hbs.registerPartials(partialPath)
  
//Set up handlebars engine and view location
app.set('view engine','hbs')
app.set('views',viewsPath)

//set up static direcctories to server
app.use(express.static(publicDirctoryPath))


app.get('',(req,res) =>{
     res.render('index',{
         title : "Weathe app",
         name:"surya"
     })
})

app.get('/help',(req,res) =>{ 
      res.render('help',{
          title : "New help page",
          name : 'surya'
      })
})
app.get('/about',(req,res) =>{
    res.render('about',{
        title : "New about page",
        name : 'surya'
    })
})
app.get('/weather',(req,res) =>{
    if(!req.query.address){
        return res.send({
            error : "you must provide adress"
        })
    }
    res.send({
        forcast : 'it is snowing',
        location : 'philadelphia',
        address : req.query.address
    })
})
app.get('/products',(req,res) =>{
    if(!req.query.search){
       return res.send({
            error: "You must provide search name"
        })
    }
    console.log(req.query.search)
    res.send({
        products : []
    })
}
)
app.get('/help/*',(req,res) =>{
    res.render('404error',{
        title : "404 Page",
        msg : "Article not found",
        name : 'surya'
    })
})
app.get('*',(req,res) =>{
    res.render('404error',{
        title : "404 Page",
        msg : "page not found",
        name : 'surya'
    })
})
app.listen(3000,() =>{
    console.log('server is upon port 3000')
})