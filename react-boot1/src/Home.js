import React from 'react';
import Media from 'react-bootstrap/Media';
import Button from 'react-bootstrap/Button';

const Home = (props) => {
    return(
        <div>
            <Media>
                <img
                    width={20}
                    height={20}
                    className="mr-3"
                    src="images/schedule.png"
                    alt="일정추가하기"
                />
              <Media.Body>
                <h5>업무마감일 
                    <Button variant="">
                        <img width={20}
                        height={20} className="mr-3" src="images/plus.png"></img>
                    </Button></h5>
                
                <p> example</p>
            </Media.Body>
            </Media>

            <Media>
                <img
                    width={20}
                    height={20}
                    className="mr-3"
                    src="images/members.png"
                    alt="Generic placeholder"
                />
              <Media.Body>
                <h5>배정된멤버
                    <Button variant="">
                        <img width={20}
                        height={20} className="mr-3" src="images/plus.png"></img>
                    </Button>
                </h5>
                <p> example</p>
            </Media.Body>
            </Media>

            <Media>
                <img
                    width={20}
                    height={20}
                    className="mr-3"
                    src="images/tag.png"
                    alt="Generic placeholder"
                />
              <Media.Body>
                <h5>태그
                    <Button variant="">
                        <img width={20}
                        height={20} className="mr-3" src="images/plus.png"></img>
                    </Button>
                </h5>
                <p> example</p>
            </Media.Body>
            </Media>

            <Media>
                <img
                    width={20}
                    height={20}
                    className="mr-3"
                    src="images/point.png"
                    alt="Generic placeholder"
                />
              <Media.Body>
                <h5>중요도</h5>
                <p> example</p>
            </Media.Body>
            </Media>

            <Media>
                <img
                    width={20}
                    height={20}
                    className="mr-3"
                    src="images/label.png"
                    alt="Generic placeholder"
                />
              <Media.Body>
                <h5>색상라벨                    
                    <Button variant="">
                        <img width={20}
                        height={20} className="mr-3" src="images/plus.png"></img>
                    </Button></h5>
                <p> example</p>
            </Media.Body>
            </Media>

            <Media>
                <img
                    width={20}
                    height={20}
                    className="mr-3"
                    src="images/plus.png"
                    alt="Generic placeholder"
                />
              <Media.Body>
                <h5>체크리스트추가하기</h5>
                <p><input type='text'></input></p>
            </Media.Body>
            </Media>
        </div>
    )
}

export default Home;