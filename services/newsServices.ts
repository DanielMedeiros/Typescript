import NewsRepository from '../reposotory/newsRepository';
import newsRepository from '../reposotory/newsRepository';

class NewsServices{

    async get(){
        return await NewsRepository.find({});
    }

    async getById(_id){
        return await NewsRepository.findById({_id});
    }

    async create(news){
        return await NewsRepository.create(news);
    }

    async update(_id,news){            
        return await  NewsRepository.findByIdAndUpdate(_id, news);
    }

    async delete(_id){
        return await newsRepository.findByIdAndRemove(_id);
    }
}

export default new NewsServices;