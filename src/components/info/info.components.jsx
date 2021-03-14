import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import Item from "../item/item.components";

const UserInfo = ({user}) => {
    const {public_repos, followers, following, public_gists } = user;
    const [items] = useState([
        {id: 1, icon: <GoRepo className="icon"/>, label: 'repos', value: public_repos, color: 'pink'},
        {id: 2, icon: <FiUsers className="icon"/>, label: 'followers', value: followers, color: 'green'},
        {id: 3, icon: <FiUserPlus className="icon"/>, label: 'following', value: following, color: 'purple'},
        {id: 4, icon: <GoGist className="icon"/>, label: 'gist', value: public_gists, color: 'yellow'},
    ]);

    return <section className={"section"}>
        <Wrapper className={"section-center"}>
            {items.map(item => {
                return <Item key={item.id} item={item} />
            })}
        </Wrapper>
    </section>;
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
`;

export default UserInfo;