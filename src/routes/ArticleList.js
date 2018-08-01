import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addArticles } from '../reducers/articles'
import { VerticalList } from '../components/List'

class ArticleList extends Component{
    componentDidMount = async () => {
        const { match: { params } } = this.props

		if(this.props.articles.length > 0) return
		const response = await fetch(`/api/${params.subject}/`)
        const data = await response.json()
		this.props.dispatch(addArticles(data))
    }
    
    render(){
        return (
            <div>
                {this.props.articles ? 
                    <VerticalList>
                        {this.props.articles.map((article, i) => 
                            <li 
                                linkTo={`/${article.title}`}
                                key={i}>{article.title}</li>
                        )}
                        </VerticalList>
                    : 'Loading'}
            </div>
        )
    }
}

function mapStateToProps(state) {
	return { articles: state.articles}
}

export default connect(mapStateToProps)(ArticleList)