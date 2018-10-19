import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Spinner, Button, Picker, Icon } from 'native-base';
import { Text } from 'react-native';
import Notification from '../../../components/Notification';
import { LOGIN } from '../../../constants';

const PreloadingContainerStyled = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const PreloadingContainerControlsStyled = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const TextStyled = styled.Text`
  font-size: 14;
  text-align: center;
`;

export default class Preloading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNotification: false,
    };

    this.amountShowNotifications = 0;
  }

  componentWillMount() {
    this.fetchInitRequests();
  }

  fetchInitRequests = () => {
    const { fetchCatalog, fetchProducts, fetchRegions } = this.props;

    fetchCatalog({ login: LOGIN });
    fetchProducts({ login: LOGIN });
    fetchRegions({ login: LOGIN });
  }

  renderRedirect = () => {
    const { catalog, products, regions } = this.props,
      { showNotification } = this.state;

    if (
      !showNotification &&
      this.amountShowNotifications === 0 &&
      (catalog.isFailure || products.isFailure || regions.isFailure)
    ) {
      this.setState({ showNotification: true });
      this.amountShowNotifications = 1;
    }

    return null;
  }

  handleAnimationEnd = () => {
    this.setState({ showNotification: false });
  }

  handleRepeatRequest = () => {
    this.amountShowNotifications = 0;
    this.fetchInitRequests();
  }

  handleChangeRegions = value => {
    const { setCurrentRegion } = this.props;
    setCurrentRegion({ data: value });
  }

  handleConfirmRegion = () => {
    this.props.navigation.navigate('Main');
  }

  renderNotification() {
    const { showNotification } = this.state;

    if (!showNotification)
      return null;

    return (
      <Notification type="error" onAnimationEnd={this.handleAnimationEnd}>
        <TextStyled>Ошибка обновления данных, проверьте соединение с интернетом</TextStyled>
      </Notification>
    );
  }

  renderRepeatRequestButton() {
    const { catalog, products, regions } = this.props;

    if (!catalog.isFailure && !products.isFailure && !regions.isFailure) 
      return null;
    
    return (
      <Button full warning onPress={this.handleRepeatRequest}>
        <Text>
          Обновить
        </Text>
      </Button>
    );
  }

  renderSpinner() {
    const { catalog, products, regions } = this.props;

    if (!catalog.isRequest && !products.isRequest && !regions.isRequest)
      return null;

    return (
      <Spinner />
    );
  }

  renderRegionsPicker() {
    const { regions } = this.props;

    if (!regions.isAvailable)
      return null;

    const items = regions.items.map(region => (
      <Picker.Item key={region.id} label={region.title} value={region.id} />
    ));

    return (
      <Picker
        mode="dropdown"
        iosIcon={<Icon name="ios-arrow-down-outline" />}
        placeholder="Выберите Ваш регион"
        selectedValue={regions.currentRegion}
        onValueChange={this.handleChangeRegions}
      >
        {items}
      </Picker>
    );
  }

  renderConfirmRegionButton() {
    const { regions, catalog, products } = this.props;

    if (
      regions.currentRegion &&
      catalog.isAvailable &&
      products.isAvailable &&
      regions.isAvailable
    ) {
      return (
        <Button full success onPress={this.handleConfirmRegion}>
          <Text>
            Выбрать
          </Text>
        </Button>
      );
    }

    return null;
  }

  render() {
    const redirect = this.renderRedirect(),
      notification = this.renderNotification(),
      repeatRequestButton = this.renderRepeatRequestButton()
      confirmRegionButton = this.renderConfirmRegionButton(),
      regionsPicker = this.renderRegionsPicker(),
      spinner = this.renderSpinner();

    return (
      <Fragment>
        <PreloadingContainerStyled>
          {spinner}
        </PreloadingContainerStyled>
        <PreloadingContainerControlsStyled>
          {regionsPicker}
          {repeatRequestButton}
          {confirmRegionButton}
        </PreloadingContainerControlsStyled>
        {notification}
        {redirect}
      </Fragment>
    );
  }
}