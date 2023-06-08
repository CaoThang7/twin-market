import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BottomSheet, Switch } from '@rneui/themed';
import { ListTheme } from '@models/itemTheme';
import ButtonComponent from './button';
import Color from "@common/color"

const BottomSheetTheme: React.FC<ListTheme> = (props) => {
    return (
        <BottomSheet isVisible={props.isVisible}>
            <View style={styles.containerBSTheme}>
                <View style={styles.boxTitleTheme}>
                    <Text style={styles.txtTitleTheme}>Choose Theme</Text>
                </View>
                <View style={styles.bodyTheme}>
                    <Text style={styles.txtNameTheme}>Dark theme</Text>
                    <Switch
                        value={props.valueSwitch}
                        onValueChange={props.onValueChange}
                    />
                </View>
                <ButtonComponent
                    color={Color.bgColor.CHERRY}
                    style={styles.btnCancel}
                    title={"Cancel"}
                    titleStyle={styles.titleStyle}
                    onPress={props.onPress}
                />
            </View>
        </BottomSheet>
    )
}

export { BottomSheetTheme }

const styles = StyleSheet.create({
    containerBSTheme: {
        height: 200,
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
    titleStyle: {
        color: Color.colorApp.WHITE,
        fontSize: 18
    }
})