import React from 'react'
import {
    StyleSheet,
    View,
    FlatList,
} from 'react-native'
import AddressCard from './addressCard'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddressEmpty from './addressEmpty';

const AddressList = ({ addressList, setAddressList }: { addressList: any, setAddressList: any }) => {
    const saveAddress = async (addressId: string) => {
        await AsyncStorage.setItem('addressId', addressId);
        const newArrData = addressList.map((item: any) => {
            if (item.uid == addressId) {
                return {
                    ...item,
                    selected: true
                }
            }
            return {
                ...item,
                selected: false
            }
        })
        setAddressList(newArrData)
    }

    return (
        <View style={styles.container}>
            {addressList.length == 0
                ? <AddressEmpty />
                : <>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        data={addressList}
                        renderItem={({ item }) =>
                            <AddressCard
                                item={item}
                                saveAddress={() => saveAddress(item.uid)}
                                selected={item.selected}
                            />
                        }
                        keyExtractor={item => item.uid}
                        style={styles.containerFlatList}
                    />
                </>
            }
        </View>
    )
}

export default AddressList

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    containerFlatList: {
        height: '100%',
        marginTop: 5,
    }
})