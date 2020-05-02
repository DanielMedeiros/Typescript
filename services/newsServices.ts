import NewsRepository from '../reposotory/newsRepository';
import newsRepository from '../reposotory/newsRepository';

class NewsServices{

    get(){
        return NewsRepository.find({});
    }

    getById(_id){
        return NewsRepository.findById({_id});
    }

    create(news){
        return NewsRepository.create(news);
    }

    update(_id,news){            
        return NewsRepository.findByIdAndUpdate(_id, news);
    }

    delete(_id){
        return newsRepository.findByIdAndRemove(_id);
    }
}

export default new NewsServices;