import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  padding: 0 15px;
  margin: 10px 0px;
  width: 80vw;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 25px ${({ theme }) => theme.colors.secondary};
  }
  .card-wrapper {
    display: flex;
    justify-content: space-between;
    .userInfoProp {
      text-align: left;
      margin: 10px 0px;
      span {
        color: ${({ theme }) => theme.colors.textPrimary};
        opacity: 0.5;
      }
    }
    .userInfo {
      color: ${({ theme }) => theme.colors.secondary};
    }

    .card-left {
    }
  }
  @media (max-width: 720px) {
    .card-wrapper {
      flex-direction: column;
    }
  }
`;

const Card = ({data}) => {
    const {name,username,email,address,phone,website,company} = data;
  return (
    <StyledCard>
      <div className="card-wrapper">
        <div className="card-left">
          <div className="userInfoProp">
            <div className="userInfo">Name :</div>
            <div className="userInfoValue">{` ${name}`}</div>
          </div>
          <div className="userInfoProp">
            <div className="userInfo">Username : </div>
            <div className="userInfoValue">{username}</div>
          </div>
          <div className="userInfoProp">
            <div className="userInfo">Email :</div>
            <div className="userInfoValue">{email}</div>
          </div>
          <div className="userInfoProp">
            <div className="userInfo">Address :</div>
            <div className="userInfoValue">
              {address.street}, {address.suite}, {address.city}
              <div>
                <span>zip-code : </span>
                {address.zipcode}
              </div>
              <div>
                <span>Lat : </span>
                {address.geo.lat} , <span>Lng : </span> {address.geo.lng}
              </div>
            </div>
          </div>
        </div>
        <div className="card-right">
          <div className="userInfoProp">
            <div className="userInfo">Phone :</div>
            <div className="userInfoValue">{phone}</div>
          </div>
          <div className="userInfoProp">
            <div className="userInfo">Website :</div>
            <div className="userInfoValue">{website}</div>
          </div>
          <div className="userInfoProp">
            <div className="userInfo">Company :</div>
            <div className="userInfoValue">
              <div>
                <span>name : </span>
                {company.name}
              </div>
              <div>
                <span>Phrase : </span>
                {company.catchPhrase}
              </div>
              <div>
                <span>Bs : </span>
                {company.bs}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;