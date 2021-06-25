const express = require('express');
const user = require('../routes/auth');
// 데이터 값 연결 user.nick과 user.email로 로그인한 사용자 데이터 불러오기 가능

const db = require('../models/index');

const router = express.Router();

var updateData;
var updateId;
var postdata; 
var intro;
var name;
var id;

router.get('/', (req, res) => {
  res.render('main');                               
  });

  router.route('/Teammates')

  .get((req,res) =>{
    res.render('Teammates',{user});  
  })

  .post(async(req,res)=> {
    var id = req.body.id;
    await db.Team.findOne({
      where : {id}
    })
    .then((result) =>{
      // console.log(result.id);
      var data = result;
      res.send(data);
    })
  
  });

   router.get('/teamupdate', (req,res) =>{
    res.render('teamup', {updateData,user});
 });

  router.route('/teamup')
    .get( async(req,res)=>{
         updateId = req.query.value
          
        //let writer;
        await db.Team.findOne({
          where : {id:updateId}
        }).then((result) => {
            //writer = result.id
            updateData = result;
            console.log(updateData);
            res.end();
        }).catch((error) => {
            console.log(error);
            return next(error);
        });

    })
    .put(async (req,res)=> {
          const {nme, work, age, phone, email} = req.body;      
          await db.Team.update({nme,work,age,phone,email},{where:{id:updateId}})
          res.redirect('/main/Teammates')
    });

    router.post('/Teammates/teamdelete', async(req,res)=>{
      let input = req.body.input;
      let writer;
      let id = req.body.id;

      await db.Team.findOne({
          where: {id}
      }).then((result) => {
          writer = result
      }).catch((error) => {
          console.log(error);
          return next(error);
      });
      console.log(input);
      if(input == '삭제'){
        await db.Team.destroy({where:{id}});
        res.send('일치');
    } else (input != '삭제')
        res.send('오타');
    
});

  

router.get('/post', async(req,res) => {
          await db.Post.findAll({raw : true})
          .then((results) =>{
            postdata = results;
            global.postdata = postdata;
          }).catch ((err)=>{
           console.error(err);
          });
          res.render('QnA',{postdata});
});
       
                     


router.get('/introduction',(req,res)=>{
  res.render('introduction',{user})
})


router.post('/introduction/wdb', async(req,res)=> {
    name =req.body.name;
    id = req.body.id;
    console.log(name);
    await db.Wdb.findAll({
      raw : true,
      where :{list:name}
    })
    .then((result) =>{
      
    console.log(result);
      res.send(result);
    })
  
  })
router.route('/Introduction/update')
  .get(async(req,res)=>{
    console.log(name);
    await db.Wdb.findAll({
      raw : true,
      where: {list:name}
  }).then((result) => {
    intro = result;
    console.log(result);
    res.end();
  }).catch((error) => {
    console.log(error);
    return next(error);
  });
  
  })
  .post(async(req,res)=>{
  var content = req.body.content;
    console.log([id]);
            await db.Wdb.update({content:content},{where:{id}})
            res.render('introduction',{user,intro});
  })

router.route('/Introduction/updatewrite')
  .get(async(req,res)=>{
    try{
      id =req.query.id;
      intro = await db.Wdb.findOne({where : {id:id}});
      res.render('introup',{user,intro});
    }
    catch (error){
      console.error(error);
      return next(error);
    }
  })

  .post(async(req,res)=>{
    var content = req.body.content;
    await db.Wdb.update({content:content},{where:{id}})
    res.render('introduction',{user});
    })

router.delete('/Introduction/delete', async(req,res)=>{
    id = req.body.id
    await db.Wdb.destroy({where:{id}});
    res.render('introduction',{user});
  })

  router.route('/Introduction/insert')
  
  .get(async(req,res)=> {
    console.log(name);
    res.render('introinsert',{user});
  })
  
  .post(async(req,res)=>{
    var content = req.body.content;
    
    try{
      await db.Wdb.create({
        list:name,
        content,
      });
      res.redirect('/main/Introduction');
    }catch(error){
      console.error(error);
      return next(error);
    }
  })

  module.exports = router;
