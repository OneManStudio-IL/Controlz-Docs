import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

////////////////////////////////////////////////////////////////
/// CONSTANTS
////////////////////////////////////////////////////////////////

const secondaryTextStyle = { fontSize: '0.85em', opacity: '0.3' };
const deviceImageWidth = "160";

////////////////////////////////////////////////////////////////
/// DATA COLLECTIONS
////////////////////////////////////////////////////////////////

const devices = [
  {
    name: 'Lego® Technic™ Hub',
    partNumber: '880012',
    imgSrc: 'img/devices/technic_hub_p.webp',
    alt: 'technic hub',
  },
  {
    name: 'Lego® Technic™ Move Hub',
    partNumber: '103479c01',
    imgSrc: 'img/devices/technic_move_hub_p.webp',
    alt: 'technic move hub',
  },
  {
    name: 'Lego® Move Hub',
    partNumber: '88006',
    imgSrc: 'img/devices/boost_hub_p.webp',
    alt: 'move hub',
  },
  {
    name: 'Lego® Hub',
    partNumber: '88009',
    imgSrc: 'img/devices/city_hub_p.webp',
    alt: 'lego hub',
  },
  {
    name: 'Lego® Remote Control',
    partNumber: '88010',
    imgSrc: 'img/devices/remote_hub_p.webp',
    alt: 'remote control',
  },
  {
    name: 'Lego® Large Hub',
    partNumber: '88016',
    imgSrc: 'img/devices/inventor_hub_p.webp',
    alt: 'large hub',
  },
  {
    name: 'BuWizz® 2.0 Hub',
    partNumber: '',
    imgSrc: 'img/devices/buwizz2_hub_p.webp',
    alt: 'remote control',
  },
  {
    name: 'BuWizz® 3.0 Pro Hub',
    partNumber: '',
    imgSrc: 'img/devices/buwizz3_hub_p.webp',
    alt: 'large hub',
  },
];

const motors = [
  {
    name: 'Technic™ Large Motor',
    partNumber: '88013',
    imgSrc: 'img/devices/technic_l.webp',
    alt: 'technic hub',
  },
  {
    name: 'Technic™ XL Motor',
    partNumber: '88014',
    imgSrc: 'img/devices/technic_xl.webp',
    alt: 'technic hub',
  },
  {
    name: 'Large Angular Motor',
    partNumber: '88017',
    imgSrc: 'img/devices/technic_large_angular.webp',
    alt: 'technic hub',
  },
  {
    name: 'Education Large Angular Motor',
    partNumber: '45602',
    imgSrc: 'img/devices/education_large_angular.webp',
    alt: 'technic hub',
  },
  {
    name: 'Medium Linear Motor',
    partNumber: '88008',
    imgSrc: 'img/devices/medium_linear_motor.webp',
    alt: 'technic hub',
  },
  {
    name: 'Simple Medium Linear Motor',
    partNumber: '45303',
    imgSrc: 'img/devices/simple_medium_linear_motor.webp',
    alt: 'technic hub',
  },
  {
    name: 'Train Motor',
    partNumber: '88011',
    imgSrc: 'img/devices/train_motor.webp',
    alt: 'technic hub',
  },
  {
    name: 'Medium Angular Motor',
    partNumber: '88018',
    imgSrc: 'img/devices/medium_angular_motor.webp',
    alt: 'technic hub',
  },
  {
    name: 'Medium Angular Motor',
    partNumber: '45603',
    imgSrc: 'img/devices/education_medium_angular_motor.webp',
    alt: 'technic hub',
  },
  {
    name: 'Small Angular Motor',
    partNumber: '45607',
    imgSrc: 'img/devices/small_angular_motor.webp',
    alt: 'technic hub',
  },
  {
    name: 'Move Hub Medium Linear Motor',
    partNumber: '88006',
    imgSrc: 'img/devices/move_hub_medium_linear_motor.webp',
    alt: 'technic hub',
  },
  {
    name: 'Light',
    partNumber: '88005',
    imgSrc: 'img/devices/light.webp',
    alt: 'technic hub',
  },
];

const sensors = [
  {
    name: 'Color & Distance Sensor',
    partNumber: '88007',
    imgSrc: 'img/devices/color_and_distance_sensor.webp',
    alt: 'technic hub',
  },
  {
    name: 'Distance Sensor',
    partNumber: '45604',
    imgSrc: 'img/devices/technic_distance_sensor.webp',
    alt: 'technic hub',
  },
  {
    name: 'Color Sensor',
    partNumber: '45605',
    imgSrc: 'img/devices/technic_color_sensor.webp',
    alt: 'technic hub',
  },
  {
    name: 'Force Sensor',
    partNumber: '45606',
    imgSrc: 'img/devices/force_sensor.webp',
    alt: 'technic hub',
  },
  {
    name: '3x3 Color Light Matrix',
    partNumber: '45608',
    imgSrc: 'img/devices/color_matrix_3x3.webp',
    alt: 'technic hub',
  },
  {
    name: 'WeDo 2.0 Tilt Sensor',
    partNumber: '45305-1',
    imgSrc: 'img/devices/wedo_2_tilt_sensor.webp',
    alt: 'technic hub',
  },
  {
    name: 'WeDo 2.0 Motion Sensor',
    partNumber: '45304-1',
    imgSrc: 'img/devices/wedo_2_motion_sensor.webp',
    alt: 'technic hub',
  },
];

////////////////////////////////////////////////////////////////
/// GENERIC FUNCTION
////////////////////////////////////////////////////////////////

function GetImgUrl(imgPath)
{
    const {siteConfig} = useDocusaurusContext();
    return siteConfig.baseUrl + imgPath
}

const CreateTableGeneric = (data) => (
  <table style={{ width: '100%' }}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
      {data.map(({ name, partNumber, imgSrc, alt }) => (
        <tr key={imgSrc}>
          <td>
            <div>{name}</div>
            <div style={secondaryTextStyle}>{partNumber}</div>
          </td>
          <td>
            <img src={GetImgUrl(imgSrc)} alt={alt} width={deviceImageWidth} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

////////////////////////////////////////////////////////////////
/// SPECIAL FUNCTIONS
////////////////////////////////////////////////////////////////

export const SupportedHubsTable = () => (
  CreateTableGeneric(devices)
);

export const SupportedMotorsTable = () => (
  CreateTableGeneric(motors)
);

export const SupportedSensorsTable = () => (
  CreateTableGeneric(sensors)
);

export default SupportedHubsTable;
