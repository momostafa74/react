import styled from 'styled-components';

export const SocialMedia = styled.div`
    height: auto;
    overflow: hidden;
`;

export const Social = styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background: ${props => {
        switch (props.item) {
            case 1:
                return '#3b5998';
            case 2:
                return '#498cbf';
            case 3:
                return '#cc2127';
            default:
                return 'none';
        }
    }};
`;

export const Icon = styled.div`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
    margin-top: 23px;
`;

export const SocialDesc = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
    float: left;
`;

export const Span = styled.span`
    display: block;
    margin-bottom: 8px;
`;

export const SpanInfo = styled.span`
    font-weight: normal;
`;
