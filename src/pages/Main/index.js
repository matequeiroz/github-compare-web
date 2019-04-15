import React, { Component } from 'react'
import moment from 'moment'
import { Container, Form } from './style'
import logo from '../../assets/logo.png'
import RepositoryList from '../../components/RepositoryList/index'
import api from '../../services/api'

class Main extends Component {

    state = {
        // error fetching repository or nonexistent repository
        searchRepositoryWithError: false,
        // input user
        repositoryInputUser: '',
        // array with repositories
        repositories: [],
        // indicates data loading
        loadingSearchRepository: false
    }


    handleInputRepository = (event) => {
        this.setState({repositoryInputUser: event.target.value})
    }

    handleSubmitFormSearchRepository = async (event) => {
        try {
            // data loading start
            this.setState({loadingSearchRepository: true})
            event.preventDefault();
            // get data api github
            const response = await api.get(`/repos/${this.state.repositoryInputUser}`);
            // treats the date in a readable format
            response.data.pushed_at = moment(response.data.pushed_at).fromNow();
            this.setState({
                searchRepositoryWithError: false,
                repositoryInputUser: '',
                repositories: [...this.state.repositories, response.data]
            })
        } catch(err){
            this.setState({searchRepositoryWithError: true})
        } finally {
            this.setState({loadingSearchRepository: false})
        }

    }

    render() {
        return (
            <Container>
                <img src={logo} alt="Logo Github Compare"/>
                <Form searchWithError={this.state.searchRepositoryWithError} onSubmit={e => this.handleSubmitFormSearchRepository(e)}>
                    <input onChange={e => this.handleInputRepository(e)} value={this.state.repositoryInputUser} type="text" placeholder="usuário/repositório"/>
                    <button type="submit">{this.state.loadingSearchRepository ? <i className="fa fa-spinner fa-pulse"></i> : "+"}</button>
                </Form>
                <RepositoryList repositories={this.state.repositories}/>

            </Container>
        )
    }
}

export default Main;
