import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { BottomSheet, Switch } from '@rneui/themed';
import { ListLanguage } from '@models/itemLanguage';
import { RadioButton } from 'react-native-paper';
import { ListTheme } from '@models/itemTheme';
import Color from "@common/color"
import imgurl from '@common/imgurl';
import ButtonComponent from './button';

const BottomSheetTheme: React.FC<ListTheme> = (props) => {
    return (
        <BottomSheet isVisible={props.isVisible}>
            <View style={styles.containerBSTheme}>
                <View style={styles.boxTitleTheme}>
                    <Text style={styles.txtTitleTheme}>{props.titleTheme}</Text>
                </View>
                <View style={styles.bodyTheme}>
                    <Text style={styles.txtNameTheme}>{props.txtNameTheme}</Text>
                    <Switch
                        value={props.valueSwitch}
                        onValueChange={props.onValueChange}
                    />
                </View>
                <ButtonComponent
                    color={Color.bgColor.CHERRY}
                    style={styles.btnCancel}
                    title={props.txtBtn}
                    titleStyle={styles.titleStyle}
                    onPress={props.onPress}
                />
            </View>
        </BottomSheet>
    )
}

const BottomSheetLanguage: React.FC<ListLanguage> = (props) => {
    return (
        <BottomSheet isVisible={props.isVisible}>
            <View style={styles.containerLanguage}>
                <View style={styles.boxTitleTheme}>
                    <Text style={styles.txtTitleTheme}>{props.titleLanguage}</Text>
                </View>
                <RadioButton.Group
                    onValueChange={props.onValueChange}
                    value={props.valueRadio}>
                    {/* RadioButton EN */}
                    <View style={styles.boxRadio}>
                        <View style={styles.itemLeft}>
                            <Image
                                source={{ uri: imgurl.iconFlagEN }}
                                style={styles.imgItemLeft}
                            />
                            <Text style={styles.txtItemLeft}>English</Text>
                        </View>
                        <View style={styles.itemRight}>
                            <RadioButton value="en" color='white' />
                        </View>
                    </View>
                    {/* RadioButton VN */}
                    <View style={styles.boxRadio}>
                        <View style={styles.itemLeft}>
                            <Image
                                source={{ uri: imgurl.iconFlagVN }}
                                style={styles.imgItemLeft}
                            />
                            <Text style={styles.txtItemLeft}>Vietnamese</Text>
                        </View>
                        <View style={styles.itemRight}>
                            <RadioButton value="vi" color='white' />
                        </View>
                    </View>
                    {/* RadioButton CN */}
                    <View style={styles.boxRadio}>
                        <View style={styles.itemLeft}>
                            <Image
                                source={{ uri: imgurl.iconFlagCN }}
                                style={styles.imgItemLeft}
                            />
                            <Text style={styles.txtItemLeft}>China</Text>
                        </View>
                        <View style={styles.itemRight}>
                            <RadioButton value="cn" color='white' />
                        </View>
                    </View>
                </RadioButton.Group>
                <ButtonComponent
                    color={Color.bgColor.CHERRY}
                    style={styles.btnCancelLanguage}
                    title={props.txtBtn}
                    titleStyle={styles.titleStyle}
                    onPress={props.onPress}
                />
            </View>
        </BottomSheet>
    )
}

export { BottomSheetTheme, BottomSheetLanguage }

const styles = StyleSheet.create({
    containerBSTheme: {
        height: 200,
        backgroundColor: 'white',
        flex: 1
    },
    containerLanguage: {
        height: 330,
        backgroundColor: 'white',
        flex: 1
    },
    boxTitleTheme: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
    },
    txtTitleTheme: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    bodyTheme: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 20
    },
    txtNameTheme: {
        fontSize: 18,
    },
    btnCancel: {
        marginTop: 20,
        paddingHorizontal: 10,
    },
    btnCancelLanguage: {
        marginTop: 20,
        paddingHorizontal: 10,
    },
    titleStyle: {
        color: Color.colorApp.WHITE,
        fontSize: 18
    },
    boxRadio: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 20,
        justifyContent: 'space-between'
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgItemLeft: {
        height: 40,
        width: 40
    },
    txtItemLeft: {
        marginLeft: 5,
        fontSize: 18
    },
    itemRight: {
        backgroundColor: Color.colorApp.DARKORANGE,
        borderRadius: 10
    }
})