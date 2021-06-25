const express = require('express');
const user = require('../routes/auth');
// 데이터 값 연결 user.nick과 user.email로 로그인한 사용자 데이터 불러오기 가능

const db = require('../models/index');

const router = express.Router();

var postdata; 
var tupdata;
var value;



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
    res.render('teamup', {tupdate});
 });

  router.route('/teamup')
    .get( async(req,res)=>{
          value = req.body.value;
        //let writer;
        await db.Team.findOne({
          where : {id:value}
        }).then((result) => {
            //writer = result.id
            tupdate = result;
            res.send(tupdata);
        }).catch((error) => {
            console.log(error);
            return next(error);
        });
        // if(writer == user.nick){
        //     res.send('ok');
        // }else {
        //     res.send('fail');
        // }
    })
    // .put(async (req,res)=> {
    //     //const {content} = req.body;
    //       await db.Team.update({id},{nme},{work},{age},{phone},{email},{where:{id}})
    //         //{where:{nme:user.nick}}
    //       res.redirect('/main/Teammates')
    // });

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
          }).catch ((err)=>{
           console.error(err);
          });
          res.redirect('/main/QnA');
});
       
router.get('/QnA' ,(req,res) => {
  res.render('QnA' , {postdata});
})                       


router.get('/introduction',(req,res)=>{
  res.render('introduction',{user})
})

router.post('/introduction/wdb', async(req,res)=> {
  var id =req.body.id;
  await db.Wdb.findOne({raw : true})
  .then((result) =>{
    var data = [result.humanaim, result.tc, result.part];
    // console.log(data[2]);
    res.send(data);
  })

})
router.post('/introduction/cp', async(req,res)=> {
  var id =req.body.id;
  await db.Cp.findOne({raw : true})
  .then((result) =>{
    var data = [result.humanaim, result.tc, result.part];
    // console.log(data[2]);
    res.send(data);
  })

})
router.post('/introduction/gc', async(req,res)=> {
  var id =req.body.id;
  await db.Gc.findOne({raw : true})
  .then((result) =>{
    var data = [result.humanaim, result.tc, result.part];
    // console.log(data[2]);
    res.send(data);
  })

})
  module.exports = router;
