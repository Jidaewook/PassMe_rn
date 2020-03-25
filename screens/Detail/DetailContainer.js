import React, {Component} from 'react';
import DetailPresenter from './DetailPresenter';
import {mainApi} from "../../api";



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
                        tags
                    }

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
            tags,
            loading: true
        }
    }

    // 라이프사이클 함수 실행
    async componentDidMount() {
        const {id} = this.state;
        let error, 
            title,
            desc,
            category,
            bbsimg,
            comments,
            createdAt,
            updatedAt,
            likes,
            tags;

        try {
            ({bbsInfo: {
                id, title, desc, category: category, bbsimg: bbsimg, comments, createdAt, updatedAt, likes, taps
            }} = await mainApi.detail(id));
            this.setState({
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
            })

        } catch {
            console.log({error: "Can't get Data-Detail"});
        } finally {
            this.setState({
                loading: false

            });
        }
    }


    render() {
        const {
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
        } = this.state;

        console.log("id", id);
        console.log("title", title);
        console.log("desc", desc);
        console.log("category", category);
        console.log("bbsimg ", bbsimg );
        console.log("comments", comments);
        console.log("createdAt", createdAt);
        console.log("updatedAt", updatedAt);
        console.log("likes", likes);
        console.log("tags", tags);
        


        return (
            <DetailPresenter 
                id={id}
                title={title}
                desc={desc}
                category={category}
                bbsimg={bbsimg}
                likes={likes}
                comments={comments}
                createdAt={createdAt}
                updatedAt={updatedAt}
                tags={tags}
            />


            
        );
    
    
    
    }
}


