import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  FormAndMemeContainer,
  MemeGeneratorForm,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  GenerateButton,
  MemeContainer,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onChangeImageUrl = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeActiveOptionId = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }

  renderMemeGeneratorForm = () => {
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
        <CustomLabel htmlFor="backgroundImageUrl">Image Url</CustomLabel>
        <CustomInput
          type="text"
          id="backgroundImageUrl"
          placeholder="Enter the Image URL"
          onChange={this.onChangeImageUrl}
          value={backgroundImageUrlInput}
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          type="text"
          id="topText"
          placeholder="Enter the Top Text"
          onChange={this.onChangeTopText}
          value={topTextInput}
        />
        <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
        <CustomInput
          type="text"
          id="bottomText"
          placeholder="Enter the Bottom Text"
          onChange={this.onChangeBottomText}
          value={bottomTextInput}
        />
        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomSelect
          id="select"
          onChange={this.onChangeActiveOptionId}
          value={activeFontSizeOptionId}
        >
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId}>
              {eachOption.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGeneratorForm>
    )
  }

  renderMeme = () => {
    const {
      backgroundImageUrl,
      topText,
      bottomText,
      activeFontSizeId,
    } = this.state
    return (
      <MemeContainer data-testId="meme" backgroundImage={backgroundImageUrl}>
        <TextContent activeFontSizeId={activeFontSizeId}>{topText}</TextContent>
        <TextContent activeFontSizeId={activeFontSizeId}>
          {bottomText}
        </TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            {this.renderMeme()}
            {this.renderMemeGeneratorForm()}
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}
export default MemeGenerator
