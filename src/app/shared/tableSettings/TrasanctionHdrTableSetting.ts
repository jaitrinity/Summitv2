export class TrasanctionHdrTableSetting{
    public static setting = {
        mode: 'external',
        hideSubHeader: false,
        actions: {
          position: 'right',
          add: false,
          edit : false,
          delete : true
        },
        pager :{
          perPage : 10
        },
        columns: {
          transactionId: {
            // title: 'TRANSACTION_ID',
            title: 'Activity Id',
            width : '100px'
            // sort : false,
          },
          topFirstCheckpointValue : {
            title: 'Site Name',
            width : '165px'
          },
          fillingBy : {
            title: 'Employee Name',
            width : '138px'
          },
          dateTime: {
            title: 'Date',
            width : '165px'
            // sort : false,
          },
          verifiedDate: {
            title: 'Verify Date',
            width : '165px'
            // sort : false,
          },
          // verifiedBy: {
          //   title: 'Verify By',
          //   width : '200px'
          //   // sort : false,
          // },
          approvedDate : {
            title : "Approve Date",
            width : '165px'
            // sort : false,
          },
          // approvedBy : {
          //   title : "Approve By",
          //   width : '200px'
          //   // sort : false,
          // },
          pendingForVerify : {
            title : "Verified",
            width : '100px'
            // sort : false,
          },
          pendingForApprove : {
            title : "Approved",
            width : '100px'
            // sort : false,
          }
        },
        delete: {
          deleteButtonContent: '<button>View</button>',
          mode: 'external'
        }
    }
}