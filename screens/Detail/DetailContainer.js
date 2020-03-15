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
            ({data: {
                title, desc, category, bbsimg, comments, createdAt, updatedAt, likes, tags
            }} = await mainApi.detail(id));

        } catch {
            console.log(error);
        } finally {
            this.setState({
                loading: false,
                title,
                desc,
                category,
                bbsimg,
                comments,
                createdAt,
                updatedAt,
                likes,
                tags

            });
        }
    }


    render() {
        const {id, title, desc, category, bbsimg, comments, createdAt, updatedAt, likes, tags} = this.state;
        console.log(this.state);
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


