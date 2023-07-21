//
//  NativeClass.m
//  SampleProject
//
//  Created by Lavanya Chebolu on 23/06/23.
//

#import "NativeClass.h"
#import <UIKit/UIKit.h>

@implementation NativeClass
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(phoneCall:(NSString *)number myCallback:(RCTResponseSenderBlock)callback)
{
//  dispatch_async(dispatch_get_main_queue(), ^{
//
//    [[UIApplication sharedApplication] openURL:[NSURL URLWithString:[NSString stringWithFormat:@"tel:%@", number]] options:@{} completionHandler:nil];
//
//  });
  NSString *value = @"Lavanya Native Class";
  callback(@[value]);
  
}
@end
