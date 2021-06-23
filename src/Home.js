import React, { useState } from 'react'
import { Avatar, Card, Col, Input, Layout, Row } from 'antd'
import './home.less'

const Home = () => {
  const initialPosts = [
    'Le Lorem Ipsum est simplement du faux texte employé dans la composition',
    'On sait depuis longtemps que travailler avec du texte lisible et contenant d',
    'On sait depuis longtemps que travailler avec du texte lisible et contenant d',
    'On sait depuis longtemps que travailler avec du texte lisible et contenant d',
    'On sait depuis longtemps que travailler avec du texte lisible et contenant d',
    'On sait depuis longtemps que travailler avec du texte lisible et contenant d',
  ]
  const [posts, setPosts] = useState(initialPosts)
  const [input, setInput] = useState('')

  const onSend = () => {
    const newPosts = [...posts]
    newPosts.push(input)
    setPosts(newPosts)
  }
  return (
    <Layout>
      <Layout.Content className="main-layout">
        <Row className="main-content">
          <Col span={4} />
          <Col span={16}>
            <Row gutter={[16, 16]}>
              {posts.map((post, index) => {
                return (
                  <Col key={index}
                       span={24}>
                    <Card>
                      <Card.Meta avatar={<Avatar src="https://source.unsplash.com/random/128x128" />}
                                 description={post} />
                    </Card>
                  </Col>
                )
              })
              }
            </Row>
          </Col>
          <Col span={4} />
        </Row>
        <Row>
          <Col span={4} />
          <Col span={16}>
            <Input.Search placeholder="What's your mood?"
                          allowClear
                          enterButton="Send"
                          size="large"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          onSearch={onSend} />
          </Col>
          <Col span={4} />
        </Row>
      </Layout.Content>
    </Layout>
  )
}

export default Home
