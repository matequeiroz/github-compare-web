import React from 'react';
import PropTypes from 'prop-types'
import { Container, Repository } from './style'

// component that renders the repositories sought
const RepositoryList = ({ repositories }) => {
    return (
        <Container>
            {repositories.map((repository) => {
                return(
                    <Repository key={repository.id}>
                        <header>
                            <img src={repository.owner.avatar_url} alt={repository.owner.login}></img>
                            <h3>{repository.name}</h3>
                            <h5>{repository.owner.login}</h5>

                            <ul>
                                <li>{repository.stargazers_count} <small>stars</small></li>
                                <li>{repository.forks_count} <small>forks</small></li>
                                <li>{repository.open_issues_count} <small>issues</small></li>
                                <li>{repository.pushed_at} <small>last commit</small></li>
                            </ul>
                        </header>
                    </Repository>
                )
            })}
        </Container>
    );
};

// defines all the property types used in the Repository List component
RepositoryList.propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.shape({
        owner: PropTypes.shape({
            login: PropTypes.string,
            avatar_url: PropTypes.string
        }),
        name: PropTypes.string,
        stargazers_count: PropTypes.number,
        forks_count: PropTypes.number,
        open_issues_count: PropTypes.number,
        pushed_at: PropTypes.string
    })).isRequired,
}

export default RepositoryList;
