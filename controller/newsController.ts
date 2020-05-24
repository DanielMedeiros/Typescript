import NewsService from '../services/newsServices';
import * as HttpStatus from 'http-status';
import Helper from '../infra/helper';

import * as redis from "redis";
 

 
class NewsController {
  async get(req, res) {
    let client = redis.createClient();
 
    await client.get("news", async function (err, reply) {
 
      try {
 
        if (reply) {
          console.log("redis");
          Helper.sendResponse(res, HttpStatus.OK, JSON.parse(reply));
 
        } else {
          console.log("db");
 
          let response = await NewsService.get();
 
          client.set("news", JSON.stringify(response));
 
          client.expire("news", 20);
          
          Helper.sendResponse(res, HttpStatus.OK, response);
        }
      } catch (error) {
        console.error(error);
      }
 
    });
  }
 
  async getById(req, res) {
 
    try {
      const _id = req.params.id;
      let response = await NewsService.getById(_id);
      Helper.sendResponse(res, HttpStatus.OK, response);
 
    } catch (error) {
      console.error(error);
    }
 
  }
 
  async create(req, res) {
    try {
      let vm = req.body;
      await NewsService.create(vm);
      Helper.sendResponse(res, HttpStatus.OK, "Noticia cadastrada com sucesso!");
    } catch (error) {
      console.error(error);
    }
 
  }
 
  async update(req, res) {
    try {
      const _id = req.params.id;
      let news = req.body;
      await NewsService.update(_id, news);
      Helper.sendResponse(res, HttpStatus.OK, `Noticia atualiza com sucesso!`);
 
    } catch (error) {
      console.error(error);
    }
 
  }
 
  async delete(req, res) {
    try {
      const _id = req.params.id;
      await NewsService.delete(_id);
      Helper.sendResponse(res, HttpStatus.OK, "Noticia deletada com sucesso!");
 
    } catch (error) {
      console.error(error);
    }
 
  }
}
 
export default new NewsController();