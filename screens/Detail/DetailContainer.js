import React, {Component} from 'react';
import DetailPresenter from './DetailPresenter';


class componentName extends Component {

    this.state = {
        id,
        title,
        desc,
        category,
        bbsimg,
        comments,
        createdAt,
        updatedAt,
        likes,
        tags
    }

    render() {
        const {id, title, desc, category, bbsimg, comments, createdAt, updatedAt, likes, tags} = this.state;
        return (
            <DetailPresenter 
                id={id}
                title={title}
                desc={desc}
                category={category}
                bbsimg={bbsimg}
                comments={comments}
                createdAt={createdAt}
                updatedAt={updatedAt}
                likes={likes}
                tags={tags}


            />


            
        );
    
    
    
    }
}

componentName.propTypes = {};
