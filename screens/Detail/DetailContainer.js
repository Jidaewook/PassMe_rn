import React, {Component} from 'react';
import DetailPresenter from './DetailPresenter';




export default class DetailContainer extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam("title")
        };
    };
    
    constructor(props){
        super(props);
        const { 
            navigation: {
                state: {
                    params: { 
                        id,
                        title,
                        desc,
                        category,
                        bbsimg,
                        comments,
                        createdAt,
                        updatedAt,
                        likes,
                        tags}
                }
            }
        } = props;


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


